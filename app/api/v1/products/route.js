// app/api/products/route.js
import { NextResponse } from "next/server";
import dbConnect, { collectionlist } from "../../../lip/dbConnect";
import { ObjectId } from 'mongodb';

export const GET = async (req) => {
    try {
        const { searchParams } = new URL(req.url);

        const category = searchParams.get('category');
        const sort = searchParams.get('sort');
        const tag = searchParams.get('tag');           // সিঙ্গেল ট্যাগ
        const tags = searchParams.get('tags');         // মাল্টিপল ট্যাগ
        const exclude = searchParams.get('exclude');   // এক্সক্লুড আইডি
        const limit = searchParams.get('limit');       // লিমিট

        // Query বিল্ড
        let query = {};

        if (category && category !== 'All' && category !== 'Home') {
            query.category = category;
        }

        // ট্যাগ ফিল্টার - সিঙ্গেল
        if (tag) {
            query.tags = tag;
        }

        // ট্যাগ ফিল্টার - মাল্টিপল (AND condition)
        if (tags) {
            const tagArray = tags.split(',');
            query.tags = { $in: tagArray };
        }

        // এক্সক্লুড নির্দিষ্ট প্রোডাক্ট
        if (exclude && ObjectId.isValid(exclude)) {
            query._id = { $ne: new ObjectId(exclude) };
        }

        // Sort configuration
        let sortConfig = {};
        if (sort === 'Latest') {
            sortConfig = { createdAt: -1 };
        } else if (sort === 'Popular') {
            sortConfig = { popularity: -1 };
        } else {
            sortConfig = { createdAt: -1 };
        }

        const collection = await dbConnect(collectionlist.productsCollection);

        let queryBuilder = collection.find(query).sort(sortConfig);

        // লিমিট অ্যাপ্লাই
        if (limit && !isNaN(parseInt(limit))) {
            queryBuilder = queryBuilder.limit(parseInt(limit));
        }

        const data = await queryBuilder.toArray();

        return NextResponse.json({
            success: true,
            count: data.length,
            data: data
        });

    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
};