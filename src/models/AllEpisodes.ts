import Episode from "./Episode";

export default interface AllEpisodes {
    totalCount : number;
    edge: { node: Episode }[];
}