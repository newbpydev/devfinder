export interface Github {
  login: string | null;
  id: number;
  node_id: string | null;
  avatar_url: string | null;
  gravatar_id: string | null;
  url: string | null;
  html_url: string | null;
  followers_url: string | null;
  following_url: string | null;
  gists_url: string | null;
  starred_url: string | null;
  subscriptions_url: string | null;
  organizations_url: string | null;
  repos_url: string | null;
  events_url: string | null;
  received_events_url: string | null;
  type: string | null;
  site_admin: boolean | null;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number | null;
  public_gists: number | null;
  followers: number | null;
  following: number | null;
  created_at: string;
  updated_at: string | null;
}

export interface HttpError {
  name: string;
  status: number;
  request: Request;
  response: Response;
}

export interface Request {
  method: string;
  url: string;
  headers: RequestHeaders;
  request: RequestRequest;
}

export interface RequestHeaders {
  accept: string;
  'user-agent': string;
}

export interface RequestRequest {
}

export interface Response {
  url: string;
  status: number;
  headers: ResponseHeaders;
  data: Data;
}

export interface Data {
  message: string;
  documentation_url: string;
  status: string;
}

export interface ResponseHeaders {
  'content-length': string;
  'content-type': string;
  'x-github-media-type': string;
  'x-github-request-id': string;
  'x-ratelimit-limit': string;
  'x-ratelimit-remaining': string;
  'x-ratelimit-reset': string;
  'x-ratelimit-resource': string;
  'x-ratelimit-used': string;
}
