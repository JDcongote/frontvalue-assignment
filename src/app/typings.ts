export interface Joke {
  createdAt: Date;
  iconUrl: string;
  id: string;
  updatedAt: Date;
  url: string;
  value: string;
  isFavorite?: boolean;
  isLeaving?: boolean;
  isArriving?: boolean;
}

export interface JokeAPIResponse {
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  }
