SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "app/": "."
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-traceur": "npm:systemjs-plugin-traceur@0.0.1"
    },
    "packages": {
      "npm:systemjs-plugin-traceur@0.0.1": {
        "map": {
          "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.95",
          "traceur": "github:jmcriffey/bower-traceur@0.0.95"
        }
      }
    }
  },
  transpiler: "plugin-traceur",
  packages: {
    "app": {
      "meta": {
        "*.js": {
          "loader": "plugin-traceur"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {},
  packages: {}
});
