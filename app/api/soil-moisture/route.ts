import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongodb";
import DailyMoistureModel from "../../models/DailyMoisture";
//import summarizeDailyMoisture from "../../utils/summarize";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { moisture } = body;

    if (typeof moisture !== "number") {
      return NextResponse.json(
        { error: "Некоректне значення вологості" },
        { status: 400 }
      );
    }

    const newMoisture = new DailyMoistureModel({ moisture });
    await newMoisture.save();

    return NextResponse.json(
      { message: "Дані збережено", data: newMoisture },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();

    const latestData = await DailyMoistureModel.findOne().sort({
      timestamp: -1,
    });

    if (!latestData) {
      return NextResponse.json({ error: "Дані не знайдено" }, { status: 404 });
    }

    return NextResponse.json({ data: latestData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Помилка сервера" }, { status: 500 });
  }
}

export const revalidate = 60;
//тестіки
//summarizeDailyMoisture();
