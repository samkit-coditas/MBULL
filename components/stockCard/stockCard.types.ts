export interface IStockCardProps {
  data: any;
  currentStockNseCode: string;
  onCardSelection: (id: string) => void;
}
