import classes from "./main.module.css";
import {
  getMoistureStatus,
  getDaysUntilNextWatering,
  getWater,
} from "../utils/plantUtils";

export function PlantTable({
  selectedPlant,
  moisture,
  airHumidity,
  selectedPlantDetails,
  forecast,
  waterAmount,
}: {
  selectedPlant: string;
  moisture: number | null;
  airHumidity: number | null;
  selectedPlantDetails: any;
  forecast: any[];
  waterAmount: string | null;
}) {
  if (!selectedPlant || moisture === null || airHumidity === null) {
    return <p></p>;
  }

  return (
    <div className={classes.tableWrapper}>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Назва рослини</th>
            <th>Вологість грунту(%)</th>
            <th>Стан ґрунту</th>
            <th>Вологість повітря (%)</th>
            <th>Прогноз на полив</th>
            <th>Кількість води (мл)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedPlant || "Не вибрано"}</td>
            <td>{moisture !== null ? `${moisture}%` : "Завантаження..."}</td>
            <td>{getMoistureStatus(moisture, selectedPlantDetails)}</td>
            <td>
              {airHumidity !== null ? `${airHumidity}%` : "Завантаження..."}
            </td>
            <td>
              {getDaysUntilNextWatering(
                moisture,
                selectedPlantDetails,
                forecast
              )}
            </td>
            <td>{getWater(waterAmount)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
