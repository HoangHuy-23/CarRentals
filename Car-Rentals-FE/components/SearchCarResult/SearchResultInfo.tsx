type Props = {
  total: number;
  city: string;
};

export default function SearchResultInfo({ total, city }: Props) {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} cars found in {city}
      </span>
    </div>
  );
}
