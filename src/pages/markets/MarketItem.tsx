import {
  Box,
  css,
  Heading,
  Paragraph,
  Stack,
  styled,
  UpdatedButton,
  useColorModeValue,
} from "@youngagency/young-ui";
import React from "react";
import { Market } from "../../types/markets";

const SingleLineParagraph = styled(Paragraph)({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const SingleLineHeading = styled(Heading)({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const ItemContainer = styled(Box)(
  css({
    height: "72px",
    borderRadius: "16px",
    transition: "background-color 200ms",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "grey.8",
    },
  })
);

const Image = styled.img({
  width: "36px",
  height: "36px",
});

type Props = {
  market: Market;
};

export const getMarketPercentageColor = (percentage: number) => {
  if (percentage > 0) {
    return "green.300";
  }
  if (percentage < 0) {
    return "red.300";
  }
  return "grey.1";
};

function calculatePriceAmount(initialPrice: number, currentPrice: number) {
  return ((currentPrice - initialPrice) / initialPrice) * 100;
}

function getRandomArbitrary(min: number, max: number) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

export const MarketItem = ({ market }: Props) => {
  const INITIAL_PRICE = React.useMemo(() => getRandomArbitrary(1, 2000), []);
  const [fiatPrice, setFiatPrice] = React.useState<number>(INITIAL_PRICE);
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  const handleFavorite = React.useCallback((e: React.MouseEvent) => {
    setIsFavorite((prevState) => !prevState);
  }, []);

  const handlePumpIt = React.useCallback(() => {
    setFiatPrice((prevState) =>
      Number(
        (
          prevState + getRandomArbitrary(INITIAL_PRICE, INITIAL_PRICE * 2)
        ).toFixed(2)
      )
    );
  }, []);

  const handleDumpIt = React.useCallback(() => {
    setFiatPrice((prevState) => 0);
  }, []);

  const pricePercentChange = calculatePriceAmount(INITIAL_PRICE, fiatPrice);

  return (
    <ItemContainer>
      <Stack
        direction="row"
        pl={"16px"}
        spacing="15px"
        width="100%"
        align="center"
      >
        <Box flexBasis={0} flexGrow={2}>
          <Stack direction="row" spacing="16px" align="center">
            <Image src={market.image_light} alt={market.name} />
            <Box
              minWidth="46px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={handleFavorite}
            >
              {!isFavorite && <span>&#9734;</span>}
              {isFavorite && <span>&#9733;</span>}
            </Box>
            <Stack direction="column" spacing="2px" overflow="hidden">
              <SingleLineHeading size="sm">{market.name}</SingleLineHeading>
              <Stack direction="row" spacing="5px" align="center">
                <SingleLineParagraph size="md">
                  {market.symbol}
                </SingleLineParagraph>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box flexBasis={0} flexGrow={1}>
          <Paragraph size="md">{fiatPrice} €</Paragraph>
        </Box>
        <Box flexBasis={0} flexGrow={1}>
          <Paragraph
            size="md"
            color={getMarketPercentageColor(pricePercentChange)}
          >
            {pricePercentChange > 0 ? "+" : ""}
            {pricePercentChange.toFixed(2)}%
          </Paragraph>
        </Box>
        <Box flexBasis={0} flexGrow={1}>
          <UpdatedButton onClick={handlePumpIt}>Pump It</UpdatedButton>
        </Box>
        <Box flexBasis={0} flexGrow={1}>
          <UpdatedButton colorScheme={"red"} onClick={handleDumpIt}>
            Dump It
          </UpdatedButton>
        </Box>
      </Stack>
    </ItemContainer>
  );
};
