import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  image_background: string;
  description: string;
}

export default function usePlatforms() {
  const Platforms = useData<Platform>("/platforms");

  return Platforms;
}
