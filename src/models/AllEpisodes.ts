import Episode from "./Episode";

export default interface AllEpisodes {    
    allAnchorEpisode: {
        totalCount : number;
        edges: { node: Episode }[];
    }
    
}