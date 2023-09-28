import { NextRequest, NextResponse } from "next/server";
import { db, cart_Table } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { serial } from "drizzle-orm/pg-core";
import { and, eq } from "drizzle-orm";
import { useAuth } from "@clerk/nextjs";
export async function GET(request: NextRequest) {
  const req = request.nextUrl;
  const uid = req.searchParams.get("User_id") as string;

  try {
    const res = await db
      .select()
      .from(cart_Table)
      .where(eq(cart_Table.User_id, uid));
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error in get api" });
  }
}

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();

    console.log(req);
    const res = await db
      .insert(cart_Table)
      .values({
        Product_id: req.product_id,
        User_id: req.customer_user_id,
        Product_quantity: req.product_quantity,
        Product_price: req.product_price,
        Product_title: req.product_title,
        Product_image: req.product_image,
        Product_type: req.product_type,
        Product_total_price:req.product_total_price
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error in post api" });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const req = await request.json();
    const res = await db
      .delete(cart_Table)
      .where(
        and(eq(cart_Table.User_id, req.user_Id), eq(cart_Table.Id, req.Id))
      )
      .returning();
    return NextResponse.json({ message: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error in delete api" });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const req = await request.json();
    const res = await db
      .update(cart_Table).set({Product_quantity:req.product_quantity,Product_total_price:req.Product_total_price})
      .where(
        and(eq(cart_Table.User_id, req.user_Id), eq(cart_Table.Id, req.Id))
      )
      .returning();
    return NextResponse.json({ message: res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "error in put api" });
  }
}




