const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.join(__dirname, "src/index.js"),
        acces: path.join(__dirname, "src/pages/acces/acces.js"),
        actualite: path.join(__dirname, "src/pages/actualite/actualite.js"),
        avis: path.join(__dirname, "src/pages/avis/avis.js"),
        chambres: path.join(__dirname, "src/pages/chambres/chambres.js"),
        cgv: path.join(__dirname, "src/pages/cgv/cgv.js"),
        contact: path.join(__dirname, "src/pages/contact/contact.js"),
        evenements: path.join(__dirname, "src/pages/evenements/evenements.js"),
        hotel: path.join(__dirname, "src/pages/hotel/hotel.js"),
        mentionsLegales: path.join(__dirname, "src/pages/mentions-legales/mentions-legales.js"),
        planDuSite: path.join(__dirname, "src/pages/plan-du-site/plan-du-site.js"),
        presse: path.join(__dirname, "src/pages/presse/presse.js"),
        quiSommesNous: path.join(__dirname, "src/pages/qui-sommes-nous/qui-sommes-nous.js"),
        reservation: path.join(__dirname, "src/pages/reservation/reservation.js"),
        restaurant: path.join(__dirname, "src/pages/restaurant/restaurant.js"),
        spaSoins: path.join(__dirname, "src/pages/spa-soins/spa-soins.js"),
        panier: path.join(__dirname, "src/pages/panier/panier.js"),
        recrutement: path.join(__dirname, "src/pages/recrutement/recrutement.js"),
        // Component
        footer: path.join(__dirname, "src/asset/component/footer/footer.js"),
        navbarLeft: path.join(__dirname, "src/asset/component/navbar-left/navbar-left.js"),
        navbarTop: path.join(__dirname, "src/asset/component/navbar-top/navbar-top.js"),
        navbarBottom: path.join(__dirname, "src/asset/component/navbar-bottom/navbar-bottom.js"),
        spinner: path.join(__dirname, "src/asset/component/spinner/spinner.js")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].[contenthash].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: ["babel-loader"],
            },
            {
                test: /\.scss$/i,
                use: [{
                    // inject CSS to page
                    loader: 'style-loader'
                }, {
                    // translates CSS into CommonJS modules
                    loader: 'css-loader'
                }, {
                    // Run postcss actions
                    loader: 'postcss-loader',
                    options: {
                        // `postcssOptions` is needed for postcss 8.x;
                        // if you use postcss 7.x skip the key
                        postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                                return [
                                    require('autoprefixer'),
                                    require('postcss-nested')
                                ];
                            }
                        }
                    }
                }, {
                    // compiles Sass to CSS
                    loader: 'sass-loader'
                }],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|pdf|mp4)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/asset/images/*",
                    to: 'asset/images/[name][ext]',
                },
                {
                    from: "./src/asset/images/accueil/*",
                    to: 'asset/images/accueil/[name][ext]',
                },
                {
                    from: "./src/asset/images/chambres/*",
                    to: 'asset/images/chambres/[name][ext]',
                },
                {
                    from: "./src/asset/images/hotel/*",
                    to: 'asset/images/hotel/[name][ext]',
                },
                {
                    from: "./src/asset/images/restaurant/*",
                    to: 'asset/images/restaurant/[name][ext]',
                },
                {
                    from: "./src/asset/images/spa/*",
                    to: 'asset/images/spa/[name][ext]',
                },
                {
                    from: "./src/asset/images/presse/*",
                    to: 'asset/images/presse/[name][ext]',
                },
                {
                    from: "./src/asset/images/evenements/*",
                    to: 'asset/images/evenements/[name][ext]',
                },
            ],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            filename: "index.html",
            hash: true,
            title: "Accueil | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France ",
            meta: {title: "H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: `Le CHAMBORD H??tel Palace ***** a toujours repr??sent?? la quintessence de Luxe parisien
                    dans un style Art D??co depuis 1919. Au centre du Triangle d'Or au 1er de l'avenue Montaigne, nous
                    vous offrons avec notre ??quipe les plus belles aventures pour profiter de la capitale et 
                    faire de votre s??jour parisien un moment inoubliable`,
                keywords: `Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/index.html"),
            chunks: ["main", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"]
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "acces.html",
            title: "Acc??s | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` Au centre du Triangle d'Or au 1er de l'avenue Montaigne,
                    nous vous offrons de d??couvrir le coeur de la capitale, a proximit?? des 
                    lieux iconiques que sont la Tour Eiffel, l'Arc de Triomphe les Champs Elys??es
                    et le mus??e du Louvre.      `,
                keywords: `Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Tour Eiffel, Avenue Montaigne
                    , Champs Elys??es, Arc de Triomphe, Mus??e du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/acces/acces.html"),
            chunks: ["acces", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "actualite.html",
            title: "Actualit?? | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: "Suivez toute l'actualit?? ave H??tel Palace ***** 1 Avenue Montaigne - Paris, France",
                description: ` L'actualit?? du luxe ?? la fran??aise et de l'exclusivit?? se lit sur notre fil. `,
                keywords: `Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elys??es, Arc de Triomphe, Mus??e du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/actualite/actualite.html"),
            chunks: ["actualite", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "avis.html",
            title: "Avis | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: "H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` Venez partager votre exp??rience de l'excellence sur notre mur d'avis.`,
                keywords: `Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elys??es, Arc de Triomphe, Mus??e du Louvre, Avis`,
            },
            template: path.join(__dirname, "./src/pages/avis/avis.html"),
            chunks: ["avis", "footer", "spinner", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "chambres.html",
            title: "Chambres | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "D??couvrez nos chambres - H??tel Palace ***** 1 Avenue Montaigne - Paris, France",
                description: ` El??gance, chic, patrimoine ; tout ce qui rend Paris sp??cial se refl??te dans nos chambres 
                    et suites. Faites l'exp??rience d'un luxe contemporain exceptionnel dans l'un des h??tels les plus historiques 
                    de la ville, o?? la tradition se fond harmonieusement avec la technologie moderne et le confort.  `,
                keywords:`Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Chambre, classique, confort, Deluxe, suite`,
            },
            template: path.join(__dirname, "./src/pages/chambres/chambres.html"),
            chunks: ["chambres", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "cgv.html",
            title: "CGV | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: "Condition des vente - H??tel Palace ***** 1 Avenue Montaigne - Paris, France",
                description: ` Description des services, parcours de r??servation, Prix et paiement,
                        Enregistrement en ligne, Annulation, Engagement et responsabilit?? du client, 
                        Engagement et responsabilit?? de l'H??tel CHAMBORD, Force majeur et d??logement, Contact, Service Client et r??clamations,
                        Donn??es ?? caract??re personnelle, Loi applicable et r??glement des litiges,`,
                keywords: `Description des services, Prix et paiement, Annulation, responsabilit?? du client, Loi applicable et r??glement des litiges`,
            },
            template: path.join(__dirname, "./src/pages/cgv/cgv.html"),
            chunks: ["cgv", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "contact.html",
            title: "Contact | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Contact | H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` 
                contact : 
                tel : +33 5555 5555 5555,
                fax : +33 5555 5555 5555,
                email : serviceclient@HotelChambord.com,
                adresse : 1 Avenue Montaigne - Paris, France`,
                keywords:`Telephone, fax:, email, serviceclient@HotelChambord.com, 1 Avenue Montaigne, Paris, Champs Elys??es `,
            },
            template: path.join(__dirname, "./src/pages/contact/contact.html"),
            chunks: ["contact", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "evenements.html",
            title: "Ev??nement| H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "Ev??nement - H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` Mariage, bapt??me, anniversaire, s??minaire, festival`,
                keywords:`Mariage, bapt??me, anniversaire, s??minaire, festival, Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
            ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Chambre, classique, confort, Deluxe, suite`,
            },          template: path.join(__dirname, "./src/pages/evenements/evenements.html"),
            chunks: ["evenements", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "hotel.html",
            title: "H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France| Accueil",
                description: `Histoire de l'H??tel`,
                keywords:`Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/hotel/hotel.html"),
            chunks: ["hotel", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "mentions-legales.html",
            title: "Mentions-Legales | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: "Mentions-Legales - H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: ` Description des services, parcours de r??servation, Prix et paiement,
                            Enregistrement en ligne, Annulation, Engagement et responsabilit?? du client, 
                            Engagement et responsabilit?? de l'H??tel CHAMBORD, Force majeur et d??logement, 
                            Contact, Service Client et r??clamations,
                            Donn??es ?? caract??re personnelle, Loi applicable et r??glement des litiges,`,
                keywords: `Mention l??gales, Description des services, Prix et paiement, Annulation, responsabilit?? du client, Loi applicable et r??glement des litiges`,
            },
            template: path.join(__dirname, "./src/pages/mentions-legales/mentions-legales.html"),
            chunks: ["mentionsLegales", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "plan-du-site.html",
            title: "Plan du site | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "sitemap - plan du site",
                description: `tout les liens de notre sites est ici`,
                keywords:`sitemap, plan du site, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elys??es, Arc de Triomphe, Mus??e du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/plan-du-site/plan-du-site.html"),
            chunks: ["planDuSite", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "presse.html",
            title: "Presse | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {title: "What's news ? H??tel Palace CHAMBORD ***** 1 Avenue Montaigne - Paris, France",
                description: `L'actualit?? du luxe ?? la fran??aise et de l'exclusivit?? se lit sur notre fil.`,
                keywords:`Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing, Tour Eiffel, Avenue Montaigne, 
                    Champs Elys??es, Arc de Triomphe, Mus??e du Louvre`,
            },
            template: path.join(__dirname, "./src/pages/presse/presse.html"),
            chunks: ["presse", "spinner", "footer", "navbarLeft","navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "qui-sommes-nous.html",
            title: "Qui-sommes-nous ? | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: "Qui-sommes-nous ? - H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France| Accueil",
                description: `Le style Art D??co de l'H??tel CHAMBORD a ??t?? dessin?? par l'architecte star des ann??es d'apr??s-guerre Jean Duchauzel  du style Art D??co`,
                keywords: `Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                    ??toile, exception, bien-??tre, exp??rience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/qui-sommes-nous/qui-sommes-nous.html"),
            chunks: ["quiSommesNous", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "reservation.html",
            title: "Reservation | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: "Reservez votre s??jour a l'H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France| Accueil",
                description: `Faites les reservations de vortre s??jour d??s aujourd'hui avec notre espace de reservation en ligne`,
                keywords: `R??servation, r??server, reserve, book, booking, Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, H??tel Palace, 5, ??toiles, 5 ??toiles
                ??toile, exception, bien-??tre, exp??rience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/reservation/reservation.html"),
            chunks: ["reservation", "spinner", "footer", "navbarLeft", "navbarTop"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "restaurant.html",
            title: "Restaurant | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: `Restaurant Gastronomique Le CHAMBORD - Brasserie Art D??co - Salon de Th?? D??gustation Pla??sir`,
                description: `L?????tablissement, lieu cher aux Parisiens et aux voyageurs depuis plus de 100 ans, 
                    propose une exp??rience d???exception au c??ur de la Ville Lumi??re. 
                    L???h??tel Palace CHAMBORD pr??sente une offre de restauration raffin??e, riche de l???h??ritage culinaire 
                    de l?????tablissement qui a vu officier les plus grands chefs h??ritiers de la tradition du Ma??tre Auguste Escoffier. 
                    Au c??ur de la c??l??bre Brasserie Art-D??co, vous pourrez profiter du savoir-faire exceptionnel de nos ??quipes. 
                    Le CHAMBORD accueille ses convives sous son d??cor unique pour les d??ners gastronomique. 
                    Et le Salon sert les petits-d??jeuners et les d??gustations d???apr??s-midi durant la semaine ainsi qu???un brunch 
                    gourmet le weekend. `,
                keywords:`Authenticit??, Luxe, arts deco, adresse, Triangle d'Or, restauration, Master class, premium, unique, exception, bien-??tre, exp??rience d'exception, amazing`,
            },
            template: path.join(__dirname, "./src/pages/restaurant/restaurant.html"),
            chunks: ["restaurant", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "spa-soins.html",
            title: "Soins et SPA | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            meta: {
                title: `Le SPA "Le Jardin des Hesp??rides"`,
                description: `Le Spa de l'H??tel Palace CHAMBORD "Le Jardin de Hesp??rides" luxueux ??crin de 700 m2, 
                    d??voile son approche unique bas??e sur les quatre ??l??ments : air, terre, eau et feu. Le Spa s???est entour?? 
                    de marques expertes pour faire du lieu une r??f??rence de qualit?? et offrir une s??lection de soins et 
                    de programmes issus des derni??res avanc??es dans les domaines du bien-??tre, de la beaut??, de la nutrition 
                    et de la forme. Se basant sur une prise en charge totale du corps et de l???esprit.  `,
                keywords: `Authenticit??, Luxe, arts deco, bien-??tre, soin, beaut??, coiffure, Fitness, coach fitness, Triangle d'Or, Master class, premium, unique, exception, exp??rience ??motionnelle, 
                    effet whaoo, whaoo effect,amazing`,
            },
            template: path.join(__dirname, "./src/pages/spa-soins/spa-soins.html"),
            chunks: ["spaSoins", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "panier.html",
            title: "Panier | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            template: path.join(__dirname, "./src/pages/panier/panier.html"),
            chunks: ["panier", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        }),
        new HtmlWebpackPlugin({
            minify: false,
            hash: true,
            filename: "recrutement.html",
            title: "Recrutement | H??tel Palace CHAMBORD ***** - 1 Avenue Montaigne - Paris, France",
            template: path.join(__dirname, "./src/pages/recrutement/recrutement.html"),
            chunks: ["recrutement", "spinner", "footer", "navbarLeft", "navbarTop", "navbarBottom"],
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    stats: "minimal",
    devtool: "inline-source-map",
    mode: "development",
    devServer: {
        open: false,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        inline: true,
        port: 9000,
    },
};