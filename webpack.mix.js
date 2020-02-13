let mix = require("laravel-mix");

// setting the public directory to public (this is where the mix-manifest.json gets created)
mix.setPublicPath("public/build");
mix.js("vue/main.js", "public/build");

// aliases so instead of e.g. '../../components/test' we can import files like '@/components/test'
mix.webpackConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "vue")
    }
  }
});

//chunk file configurations for dynamic loads
mix.webpackConfig({
  output: {
    filename: "[name].js",
    chunkFilename: "js/[name].[contenthash].js",
    publicPath: "/build/"
  }
});

mix.version();
mix.sourceMaps();
