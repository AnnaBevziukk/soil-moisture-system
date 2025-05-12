import Plant from "../../../models/Plant";

export async function GET() {
  try {
    // Запит для отримання імені, опису рослини та меж вологості
    const plants = await Plant.find(
      {},
      "name careInstructions minDry maxDry minNormal maxNormal minFlooded maxFlooded"
    );

    // Відправляємо відповідь з даними рослин
    return new Response(JSON.stringify({ plants }), { status: 200 });
  } catch (error) {
    console.error("Помилка при отриманні рослин:", error);
    return new Response(
      JSON.stringify({ error: "Не вдалося отримати список рослин" }),
      { status: 500 }
    );
  }
}
