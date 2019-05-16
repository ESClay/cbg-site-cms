import EpisodeData from "./EpisodeData";

export default interface Episode {
    title: string;
    id: number;   
    contentSnippet: string;
    content: string;
    link: string;
    pubDate: Date;
    enclosure: EpisodeData
}