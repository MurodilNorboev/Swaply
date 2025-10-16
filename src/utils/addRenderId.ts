import { RegionType } from "./dummy-map";


export const addRenderId = (regions: RegionType[]): (RegionType & { renderId: string })[] => {
  return regions.map(r => ({
    ...r,
    renderId: `region-${r.id}-${Math.random().toString(36).substr(2, 9)}`,
  }));
};
