import React, { useEffect } from "react";
import { Box } from "@youngagency/young-ui";

type Props = {
  onChanged?: (isActive: boolean) => void;
  isInitialFavorite?: boolean;
};

export function FavoriteToggle({
  onChanged,
  isInitialFavorite = false,
}: Props) {
  const [isFavorite, setIsFavorite] =
    React.useState<boolean>(isInitialFavorite);
  const isFirstRenderRef = React.useRef<boolean>(true);

  const handleFavorite = React.useCallback((e: React.MouseEvent) => {
    setIsFavorite((prevState) => !prevState);
  }, []);

  const onChangedCallbackRef = React.useRef<
    undefined | ((isActive: boolean) => void)
  >(onChanged);

  useEffect(() => {
    if (!isFirstRenderRef.current) {
      onChangedCallbackRef.current = onChanged;
    }
    isFirstRenderRef.current = false;
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
