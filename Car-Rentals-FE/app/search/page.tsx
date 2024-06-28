import { DialogLocation } from "@/components/Dialog/DialogLocation";
import { DialogDateTime } from "@/components/Dialog/DialogDateTime";
import ListCarAndFilter from "@/components/SearchCarResult/ListCarAndFilter";

export type SearchState = {
  page: number;
  city: string;
  automaker: string;
  fuel: string;
  transmission: string;
  price: number;
  seat: string;
  sort: string;
};

const initialSearchState: SearchState = {
  page: 1,
  city: "",
  automaker: "all",
  fuel: "all",
  transmission: "all",
  price: 3000,
  seat: "all",
  sort: "price_low",
};

export default function page() {
  // const searchParams = useSearchParams();
  // const location = searchParams.get("location") || "";

  // const pickUpDate = new Date(searchParams.get("pickUpDate") as string);
  // const dropOffDate = new Date(searchParams.get("dropOffDate") as string);

  // const [searchState, setSearchState] = useState<SearchState>({
  //   ...initialSearchState,
  //   city: location,
  // });

  // const { data, isLoading, isError, refetch } = useQuery({
  //   queryKey: ["searchCar", searchState],
  //   queryFn: () => searchCar(searchState),
  //   enabled: false,
  // });

  // useEffect(() => {
  //   refetch();
  // }, [searchState, refetch]);

  // const handleFilterChange = (updatedFilters: Partial<SearchState>) => {
  //   setSearchState((prevState) => ({
  //     ...prevState,
  //     ...updatedFilters,
  //   }));
  // };

  return (
    <div className="container mx-auto flex-1 py-10 min-h-[80vh]">
      {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-10">
        <DialogLocation
          filters={initialSearchState}
          onFilterChange={() => {}}
        />
        <DialogDateTime pickUpDate={new Date()} dropOffDate={new Date()} />
      </div> */}
      <ListCarAndFilter />
    </div>
  );
}
