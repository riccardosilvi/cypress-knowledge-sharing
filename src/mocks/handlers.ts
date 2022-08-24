import { rest } from "msw";
import { Market } from "../types/markets";
export type LoginRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  email: string;
  password: string;
};

// @ts-ignore
const authHandler = (req, res, ctx) => {
  const parsedBody = JSON.parse(req.body);
  const { email, password } = parsedBody;
  const errors = {
    ...(password != "123456789" ? {} : { password: "password non valida" }),
    ...(email !== "test@test.com" ? {} : { email: "email non valida" }),
  };

  if (Object.keys(errors).length > 0) {
    return res(
      ctx.status(400),
      ctx.json({
        success: false,
        errors: errors,
      })
    );
  }

  return res(ctx.status(200), ctx.json({ success: true, user: email }));
};

export const handlers = [
  rest.post<LoginRequest>("/api/account/login", authHandler),
  rest.post<SignUpRequest>("/api/account/signup", authHandler),
  rest.get("/api/markets", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    /*
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
     */
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json([
        {
          symbol: "BTC",
          color: "#FFA726",
          name: "Bitcoin",
          image: "https://images.youngplatform.com/coins/btc.png",
          image_light: "https://images.youngplatform.com/coins/btc_light.png",
          image_wallet_cover:
            "https://images.youngplatform.com/coins/btc_wallet.png",
          image_wallet_cover_landscape_mobile:
            "https://images.youngplatform.com/coins/btc_wallet_expanded.png",
          image_wallet_cover_landscape_desktop:
            "https://images.youngplatform.com/coins/btc_wallet_expanded_desktop.png",
          price: 21469.33,
          character: "",
          basic: true,
          pro: true,
          coin_details: {
            whitepaper: "https://bitcoin.org/bitcoin.pdf",
            website: "https://bitcoin.org",
            max_supply: 21000000,
            current_supply: 19129450,
            market_cap: null,
            volume_24h: null,
            descriptions: {
              en: "Bitcoin is the first ever decentralised cryptocurrency created globally. \nDesigned in 2008 by the mysterious Satoshi Nakamoto as a response to the financial crisis, it was built to be independent of banks. Bitcoin proved to have a remarkable levels of security and integrity, therefore becoming the most enduring cryptocurrency. \nNakamoto chose to mint 21 million Bitcoin, thinking that scarcity would increase its value and make it immune to inflation. It is so famous that some call it Digital Gold: It’s the benchmark for all other cryptocurrencies and the first name from the crypto world that people remember.",
              fr: "Le Bitcoin est la première cryptomonnaie décentralisée au monde. Créé en 2008 par le mystérieux Satoshi Nakamoto en réponse à la crise économique, il a été conçu avec le but d'être indépendant vis-à-vis des grandes banques. Le Bitcoin s'est avéré avoir un taux de sécurité et d'intégrité remarquables, ce qui en fait la crypto-monnaie la plus ancienne au monde. Nakamoto a choisi de créér 21 millions d'unités Bitcoin, en partant du principe que la rareté de la monnaie augmenterait sa valeur et l'épargnerait des effets de l'inflation. Le Bitcoin est à présent si connu qu'il est souvent qualifié d'Or Digital, étant ainsi le point de référence pour les autres cryptomonnaies et le nom le plus reconnu dans le monde de la cryptomonnaie.",
              it: "Bitcoin è la prima criptomoneta decentralizzata a livello globale. Creata nel 2008 dal misterioso Satoshi Nakamoto in risposta alla crisi economica, è stata progettata per essere indipendente dalle banche. Bitcoin ha dimostrato di avere un tasso di sicurezza e integrità notevole, diventando la criptovaluta più longeva al mondo. \nNakamoto ha scelto di coniare 21 milioni di Bitcoin, con l’idea che la scarsa disponibilità ne avrebbe accresciuto progressivamente il valore rendendola immune all’inflazione. La sua fama è tale da essere definita Digital Gold, è la valuta di riferimento per tutte le altre criptomonete, nonché prima entità attraverso cui le persone percepiscono il mondo crypto.",
            },
          },
          locked: false,
          is_stable: false,
          network: "",
          regex: "",
          category: {
            name: "Top Coins",
            priority: 1,
          },
          shortName: "BTC",
          fullName: "Bitcoin",
          buyServiceCharge: 0.25,
          sellServiceCharge: 0.5,
          withdrawalServiceCharge: 0.00001,
          withdrawalServiceChargeInBTC: 0.1,
          confirmationCount: 3,
          contractAddress: null,
          minWithdrawalLimit: 0,
          maxWithdrawalLimit: 0,
          decimalPrecision: 8,
          makerFeePro: 1,
          takerFeePro: 1.7,
          tradeEnabled: true,
          tradeEnabled_Buy: true,
          tradeEnabled_Sell: true,
          depositEnabled: true,
          withdrawalEnabled: true,
          secondaryWalletType: "",
          addressSeparator: "",
          walletType: "Fireblocks",
          withdrawalServiceChargeType: "Percentage",
          currencyEnabled: true,
          isFiat: false,
          fiatPrice: 21469.33,
          isPro: false,
          lowestAsk: 21701.44,
          heighestBid: 21434.08,
          last: 21439.79,
          percentChange: 1.9,
          baseVolume: 292631.81570241,
          quoteVolume: 13.64900569,
          high24hr: 21469.33,
          low24hr: 21040.04,
          isBlocked: false,
        },
        {
          symbol: "ETH",
          color: "#5C6BC0",
          name: "Ethereum",
          image: "https://images.youngplatform.com/coins/eth.png",
          image_light: "https://images.youngplatform.com/coins/eth_light.png",
          image_wallet_cover:
            "https://images.youngplatform.com/coins/eth_wallet.png",
          image_wallet_cover_landscape_mobile:
            "https://images.youngplatform.com/coins/eth_wallet_expanded.png",
          image_wallet_cover_landscape_desktop:
            "https://images.youngplatform.com/coins/eth_wallet_expanded_desktop.png",
          price: 1618.05,
          character: "",
          basic: true,
          pro: true,
          coin_details: {
            whitepaper: "https://github.com/ethereum/wiki/wiki/White-Paper",
            website: "https://ethereum.org",
            current_supply: 122076773.874,
            market_cap: null,
            volume_24h: null,
            descriptions: {
              en: "Vitalik Buterin familiarised himself with blockchain technology by working as a software developer for Bitcoin when he was only 17 years old. During his employment with the company, he started conceiving a platform that could go beyond the financial uses allowed by Bitcoin. Two years later he published the White paper of Ethereum, one of the most ambitious projects in the crypto world. What Ethereum then came to be is not only a network for the exchange of cryptocurrencies but also a platform to run smart contracts on. The great revolution brought about by Buterin has been to build a structure allowing every developer to easily create blockchain-based apps by using the Ether token to pay the platform’s fees on computational power. ",
              fr: "Vitalik Buterin a abordé la technologie blockchain en travaillant comme programmeur pour Bitcoin à l'âge de 17 ans. C'est là qu'il a commencé à penser à une plateforme qui irait au-delà des modes financiers d'utilisation consentis par le Bitcoin. Deux ans plus tard, il publia le livre blanc d'Ethereum, l'un des projets les plus ambitieux du monde de la cryptomonnaie. Ethereum n'est pas devenu simplement un réseau pour échanger des crypto-monnaies, mais un réseau pour exécuter des contrats intelligents. La grande révolution apportée par Buterin a été de créer une structure qui permettrait à tout développeur de programmer facilement des applications basées sur sa blockchain en utilisant pour cela le jeton Ether afin de contribuer aux frais liés à la puissance de calcul de la plateforme. ",
              it: "Vitalik Buterin si è avvicinato alla tecnologia blockchain lavorando come programmatore per Bitcoin a 17 anni. Lì ha iniziato a immaginare una piattaforma che andasse oltre i casi d’uso finanziario consentiti da Bitcoin. Due anni dopo pubblica il White paper di Ethereum, tra i progetti più ambiziosi del mondo crypto. Quello che diventa Ethereum non è solo un network per lo scambio di criptovalute, ma una rete per far girare contratti intelligenti. La grande rivoluzione portata da Buterin è stata quella di creare una struttura che permettesse a qualsiasi sviluppatore di programmare agilmente applicazioni basate su blockchain, usando il token Ether per pagare le fee sulla potenza di calcolo della piattaforma. ",
            },
          },
          locked: false,
          is_stable: false,
          network: "",
          regex: "",
          category: {
            name: "Top Coins",
            priority: 1,
          },
          shortName: "ETH",
          fullName: "Ethereum",
          buyServiceCharge: 0.25,
          sellServiceCharge: 0.5,
          withdrawalServiceCharge: 0.001,
          withdrawalServiceChargeInBTC: 0,
          confirmationCount: 12,
          contractAddress: "",
          minWithdrawalLimit: 0,
          maxWithdrawalLimit: 0,
          decimalPrecision: 8,
          makerFeePro: 1,
          takerFeePro: 1.7,
          tradeEnabled: true,
          tradeEnabled_Buy: true,
          tradeEnabled_Sell: true,
          depositEnabled: true,
          withdrawalEnabled: true,
          secondaryWalletType: "",
          addressSeparator: "",
          walletType: "Fireblocks",
          withdrawalServiceChargeType: "Fixed",
          currencyEnabled: true,
          isFiat: false,
          fiatPrice: 1618.05,
          isPro: false,
          lowestAsk: 1630.34,
          heighestBid: 1613.95,
          last: 1615.43,
          percentChange: 3.91,
          baseVolume: 206025.52548588,
          quoteVolume: 127.53602786,
          high24hr: 1627.22,
          low24hr: 1555.48,
          isBlocked: false,
        },
        {
          symbol: "USDT",
          color: "#53ae94",
          name: "Tether USD",
          image: "https://images.youngplatform.com/coins/usdt_light_2.png",
          image_light:
            "https://images.youngplatform.com/coins/usdt_light_2.png",
          price: 0.9822168087697929,
          character: "",
          basic: true,
          pro: true,
          coin_details: {
            whitepaper:
              "https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf",
            website: "https://tether.to/",
            current_supply: 67549555015.74651,
            market_cap: null,
            volume_24h: null,
            descriptions: {
              en: "Tether is the most popular and liquid stablecoin in the cryptocurrency ecosystem and since June 2020 it is the third on the market after bitcoin and ethereum. Tether is issued by a private company based in Hong Kong, whose owners also own the Bitfinex exchange. Tether is pegged to the US dollar, for a stable value of $1.00. Tether guarantees the price of the token because for each cryptocurrency minted $1.00 is injected into its reserves. Despite being a centralised cryptocurrency, Tether is contributing to the development of the DeFi sector through partnerships and projects.",
              it: "Tether è la stablecoin più popolare e liquida nell'ecosistema delle criptovalute e da Giugno 2020 è la terza criptovaluta del mercato dopo bitcoin ed ethereum. Tether è emesso da una società privata con sede a Hong Kong, i cui proprietari possiedono anche l’exchange Bitfinex. Tether è ancorato al dollaro americano, per un valore stabile di $1.00. Tether garantisce il prezzo del token perché per ogni criptovaluta coniata viene immesso $1.00 nelle sue riserve. Nonostante sia una criptovaluta centralizzata, Tether sta contribuendo allo sviluppo del settore DeFi attraverso partnership e progetti.",
            },
          },
          locked: false,
          is_stable: true,
          network: "ERC20 Network",
          regex: "",
          category: {
            name: "Stablecoins",
            priority: 5,
          },
          shortName: "USDT",
          fullName: "Tether USD",
          buyServiceCharge: 0,
          sellServiceCharge: 0,
          withdrawalServiceCharge: 5,
          withdrawalServiceChargeInBTC: 0.25,
          confirmationCount: 35,
          contractAddress: "b",
          minWithdrawalLimit: 0,
          maxWithdrawalLimit: 0,
          decimalPrecision: 6,
          makerFeePro: 0,
          takerFeePro: 0,
          tradeEnabled: true,
          tradeEnabled_Buy: true,
          tradeEnabled_Sell: true,
          depositEnabled: true,
          withdrawalEnabled: true,
          secondaryWalletType: "",
          addressSeparator: "",
          walletType: "Fireblocks-ERC20",
          withdrawalServiceChargeType: "Percentage",
          currencyEnabled: true,
          isFiat: false,
          fiatPrice: 0.9822168087697929,
          isPro: false,
          isBlocked: false,
        },
        {
          symbol: "YNG",
          color: "#00c08b",
          name: "Young",
          image: "https://images.youngplatform.com/coins/yng.png",
          image_light: "https://images.youngplatform.com/coins/yng_light.png",
          price: 0.19238,
          character: "",
          basic: true,
          pro: true,
          coin_details: {
            whitepaper:
              "https://storage.googleapis.com/young-documents/YNG-whitepaper.pdf",
            website: "https://youngplatform.com",
            max_supply: 100000000,
            current_supply: 16730000,
            market_cap: null,
            volume_24h: null,
            descriptions: {
              en: "Young (YNG) is a utility token based on Ethereum's ERC-20 standard. Its reference ecosystem is Young Platform, the leading European exchange. There, you can buy cryptocurrencies, take advantage of services such as staking and access a wide range of educational content on the crypto sector. YNG was released to the market in 2022, but since 2018 it has been distributed to users of Step, Young Platform's app based on a play-to-earn mechanism. The main purpose of the YNG token prior to its market launch was to provide rewards and discounts, subsequently YNG has established itself as the token that brings the crypto community closer to the entire platform by providing benefits and bonuses through Clubs. ",
              fr: "Young (YNG) est un utility token (jeton utilitaire) basé sur la norme ERC-20 d'Ethereum. Son écosystème de référence est Young Platform, l’exchange européen sur lequel on peut acheter des cryptomonnaies, profiter de services tels que le staking et accéder à un large éventail de contenus éducatifs sur le secteur des cryptomonnaies. YNG sera mis sur le marché à l'été 2022, mais depuis 2018, il est distribué aux utilisateurs de Step, l'appli de Young Platform basée sur un mécanisme de play-to-earn. Le principal objectif du token YNG avant la sortie sur le marché était de fournir des rewards et des réductions, mais sa mission est de devenir le jeton qui rapproche la communauté crypto de l'ensemble de la plateforme en fournissant des avantages et des bonus à travers les Clubs. ",
              it: "Young (YNG) è un utility token basato sullo standard ERC-20 di Ethereum. Il suo ecosistema di riferimento è Young Platform, il primo exchange 100% italiano su cui acquistare criptovalute, usufruire di servizi come lo staking e accedere a un’ampia gamma di contenuti formativi sul settore crypto. YNG è stato rilasciato nel mercato nel 2022 ma fin dal 2018 è stato distribuito agli utenti di Step, l’app di Young Platform basata su un meccanismo play-to-earn. Lo scopo principale del token YNG prima del suo ingresso nel mercato è stato quello di fornire ricompense e sconti, successivamente YNG si è confermato come il token che avvicina la community crypto all’intera piattaforma garantendo vantaggi e bonus attraverso i Club. ",
            },
          },
          locked: false,
          is_stable: true,
          network: "ERC20 Network",
          regex: "",
          category: {
            name: "Stablecoins",
            priority: 5,
          },
          shortName: "YNG",
          fullName: "Young",
          buyServiceCharge: 0.1,
          sellServiceCharge: 0.2,
          withdrawalServiceCharge: 1,
          withdrawalServiceChargeInBTC: 0,
          confirmationCount: 35,
          contractAddress: "",
          minWithdrawalLimit: 0,
          maxWithdrawalLimit: 0,
          decimalPrecision: 8,
          makerFeePro: 1,
          takerFeePro: 1.7,
          tradeEnabled: true,
          tradeEnabled_Buy: true,
          tradeEnabled_Sell: true,
          depositEnabled: true,
          withdrawalEnabled: false,
          secondaryWalletType: "",
          addressSeparator: "",
          walletType: "BitGo-TestNet",
          withdrawalServiceChargeType: "Percentage",
          currencyEnabled: true,
          isFiat: false,
          fiatPrice: 0.19238,
          isPro: false,
          lowestAsk: 0,
          heighestBid: 0,
          last: 0.19238,
          percentChange: 0.01,
          baseVolume: 9.81138,
          quoteVolume: 51,
          high24hr: 0.19238,
          low24hr: 0.19237,
          isBlocked: false,
        },
      ] as Market[])
    );
  }),
];
