{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo1(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetadata1(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
