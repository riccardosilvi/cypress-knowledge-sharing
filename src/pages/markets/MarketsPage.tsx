import { useApi } from "../../hooks/useApi";
import { Box, Heading, Label } from "@youngagency/young-ui";
import { MarketItem } from "./MarketItem";

export function MarketsPage() {
  const { data, isLoading, isError } = useApi("markets");
  const Loader = () => {
    if (!data && isLoading) {
      return (
        <Box mb={"32px"}>
          <Label size="md" weight="heavy" textAlign={"center"}>
            Un attimino....
          </Label>
        </Box>
      );
    }
    return null;
  };

  return (
    <>
      <Box mb={"32px"}>
        <Heading size="xl" weight="heavy" textAlign={"center"}>
          Mercati
        </Heading>
      </Box>
      <Loader />
      {data &&
        data.map((market) => (
          <MarketItem market={market} key={market.symbol} />
        ))}
    </>
  );
}
