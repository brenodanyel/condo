{ pkgs, lib, config, ... }:

{
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_22;
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  services.postgres = {
    enable = true;
    package = pkgs.postgresql_16;
    initialDatabases = [{ name = "condosmart"; }];
    listen_addresses = "127.0.0.1";
  };

  processes = {
    api.exec = "pnpm --filter @condo/api dev";
    mobile.exec = "pnpm --filter @condo/mobile dev";
  };
}
