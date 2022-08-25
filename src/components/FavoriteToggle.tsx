import React, { useEffect } from "react";
import { Box } from "@youngagency/young-ui";

type Props = {
  onChanged?: (isActive: boolean) => void;
};

export function FavoriteToggle({ onChanged }: Props) {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

  const handleFavorite = React.useCallback((e: React.MouseEvent) => {
    setIsFavorite((prevState) => !prevState);
  }, []);

  const onChangedCallbackRef = React.useRef<
    undefined | ((isActive: boolean) => void)
  >(onChanged);

  useEffect(() => {
    onChangedCallbackRef.current = onChanged;
  }, [onChanged]);

  useEffect(() => {
    onChangedCallbackRef.current?.(isFavorite);
  }, [isFavorite]);

  return (
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
  );
}
