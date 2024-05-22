type EnvType = {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SEC: string;
  NEXTAUTH_SECRET: string;
};

type ConfigType = {
  development: EnvType;
  production: EnvType;
};

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SEC, NEXTAUTH_SECRET, ENV } =
  process.env;

const production: EnvType = {
  GITHUB_CLIENT_ID: GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SEC: GITHUB_CLIENT_SEC || "",
  NEXTAUTH_SECRET: NEXTAUTH_SECRET || "",
};

const development: EnvType = {
  GITHUB_CLIENT_ID: GITHUB_CLIENT_ID || "",
  GITHUB_CLIENT_SEC: GITHUB_CLIENT_SEC || "",
  NEXTAUTH_SECRET: NEXTAUTH_SECRET || "",
};

const config: ConfigType = {
  development,
  production,
};

export default config[ENV as keyof ConfigType];
