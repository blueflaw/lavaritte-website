import React from 'react';
import { BlogPageContentH1, BlogPageContentP, BlogPagesContainer, BlogPagesContent, BlogPageContentAuthor, BlogPageSocialAuthor, ShareWrapper, BlogImageThumbail, BlogPageContentH4, BlogPageContentH6, LogoWrapper, BlogImageLogo, ButtonOpenAccount } from './BlogPageElements';
import { animateScroll as scroll } from 'react-scroll';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import imageBIT from '../../../images/INTO_THE_BIT.jpg';
import binanceLogo from '../../../images/logos/Binance_logo.png';
import coinbaseLogo from '../../../images/logos/Coinbase.png';

export const CryptoExchangesPlatforms = () => {
    const title = 'Best Crypto Exchanges & Platforms Of ' + new Intl.DateTimeFormat('en-US', {month: "long"}).format(new Date())  + ' ' + new Date().getFullYear();
    const toggleHome = () => {
        scroll.scrollToTop();
        window.isNavStoreActive = false;
        window.isNavAboutActive = false;
        window.isNavTutorialsActive = false;
        window.isNavBlogctive = false;
        window.isNavHomeActive = true;
    };

  return (
    <React.Fragment>
        <BlogPagesContainer>
            <BlogPagesContent>
                <BlogPageContentH1>{title}</BlogPageContentH1>
                <BlogPageContentAuthor>
                    Updated: {new Intl.DateTimeFormat('en-US', {month: "long"}).format(new Date())} 1, {new Date().getFullYear()} By <BlogPageSocialAuthor to="/" onClick={toggleHome}>Allard Lavaritte</BlogPageSocialAuthor>
                </BlogPageContentAuthor>

                <ShareWrapper>
                    <FacebookShareButton url='https://lavaritte.com/blogs/bestcryptoplatforms'>
                        <FacebookIcon size={32} />
                    </FacebookShareButton>
                    <TwitterShareButton url='https://lavaritte.com/blogs/bestcryptoplatforms' title={title}>
                        <TwitterIcon size={32} />
                    </TwitterShareButton>
                </ShareWrapper>

                <BlogPageContentP>
                <BlogImageThumbail src={imageBIT}/>
                Investing in Bitcoin is popular, but how can a novice get started?
                <br/><br/>
                Is it necessary to already own Bitcoin in order to invest?
                <br/><br/>
                Or do you transfer money from your bank account to a third party and then convert it to Bitcoin? How does that appear?
                <br/><br/>
                We'll address all of these issues and provide a list of the top 10 cryptocurrency exchanges and platforms for purchasing Bitcoin and other tokens.
                <br/><br/>
                In the future, we'll utilize BTC, the symbol for Bitcoin on exchanges and trading platforms.
                <br/><br/>
                If all you want to do with cryptocurrency is earn a high return, you should consider opening a crypto savings account. These accounts offer up to 12%, but there are hazards (just like regular crypto investing).
                </BlogPageContentP>
                {/* --------------------------------------------------------------------------------------
                    add here the list 
                     --------------------------------------------------------------------------------------
                */}
                <BlogPageContentH4>
                    Best Cryptocurrency Exchanges and Investment Platforms
                </BlogPageContentH4>
                <BlogPageContentP>
                    Here is our list of the top ten cryptocurrency exchanges and trading platforms. 
                    The cryptocurrency deals on this website are provided by firms from whom The College Investor gets income. 
                    Our payment may influence how and where items displayed on this site (including, for example, the order in which they appear). 
                    The College Investor does not contain all bitcoin exchanges or all cryptocurrency offers on the market.
                </BlogPageContentP>

                <BlogPageContentH4>
                    1. Binance
                </BlogPageContentH4>
                <BlogPageContentP>
                    Binance is a cryptocurrency exchange that is the largest in the world in terms of daily cryptocurrency trading volume. 
                    It was established in 2017 and is based in the Cayman Islands.
                    <br/>
                    A fantastic site for investing in cryptocurrencies such as Cardano or Neo. 
                    Although not as user-friendly as other of the top platforms on this list, 
                    they do feature one of the most extensive trading platforms available. They do have a great mobile app, 
                    but it's not as straightforward to use and has annoyed us. Binance may be found here.
                    <br/><br/>
                    In addition, if you join up for a new Coinbase account using our link, you will receive a $5 BTC bonus after your first trade!
                </BlogPageContentP>
                <LogoWrapper><BlogImageLogo src={binanceLogo} width='200'/></LogoWrapper>
                <LogoWrapper>
                    <ButtonOpenAccount href='https://www.binance.com/en/activity/referral-entry?fromActivityPage=true&ref=LIMIT_MYX2QAG2'>Open An Account</ButtonOpenAccount>
                </LogoWrapper>

                <BlogPageContentH4>
                    2. Coinbase
                </BlogPageContentH4>
                <BlogPageContentP>
                    Because you can invest directly using USD, Coinbase is by far the most popular and one of the finest cryptocurrency exchanges. 
                    On the site, you may presently buy Bitcoin, Ethereum, and Litecoin, as well as 30+ additional currencies and tokens. 
                    Furthermore, you may earn interest on your USDT and token prizes by participating in various activities.
                    <br/><br/>
                    In addition Just like binance, if you join up for a new Coinbase account using our link, you will receive a $5 BTC bonus after your first trade!
                </BlogPageContentP>
                <LogoWrapper><BlogImageLogo src={coinbaseLogo} width='200'/></LogoWrapper>
                <LogoWrapper>
                    <ButtonOpenAccount href='https://www.coinbase.com/join/i43vrp'>Open An Account</ButtonOpenAccount>
                </LogoWrapper>

                <BlogPageContentH4>
                    Direct Deposit Of BTC
                </BlogPageContentH4>
                <BlogPageContentP>
                    If the exchange does not enable you to buy BTC by transferring money or using a credit card, you can deposit BTC from another exchange.
                    <br/> <br/>
                    This is accomplished by obtaining your wallet address from the desired exchange. Then, on the source exchange, enter it together with the 
                    quantity of BTC to be transferred to the new exchange.
                    <br/> <br/>
                    It takes a few minutes for the traded BTC to arrive in the recipient wallet.
                </BlogPageContentP>
                <BlogPageContentH4>
                    Frequently Asked Cryptocurrency Exchange Questions
                </BlogPageContentH4>
                <BlogPageContentP>
                    Here are some of the most common questions we get when it comes to our picks fr the best cryptocurrency exchanges.
                    <BlogPageContentH6>What factors should be considered while deciding on an exchange?</BlogPageContentH6><br/>
                    We look at a few key factors, such as the number of tokens and coins available, the price or commission paid, 
                    the convenience of use, the platform's security, customer support, and the functionality (such as cryptocurrency savings accounts).

                    <BlogPageContentH6>How does one obtain cryptocurrency?</BlogPageContentH6><br/>
                    You create an account with one of these exchanges, deposit funds, and then "swap" your USD or fiat cash for the cryptocurrency of your choice. 
                    Some cryptocurrencies only trade in specific pairs, so depending on what you want to buy, you may have to buy something like Bitcoin and then swap it 
                    for another token.

                    <BlogPageContentH6>How much capital do you require to get started?</BlogPageContentH6><br/>
                    Most of these trades may be established with as little as $5.
                </BlogPageContentP>
                <BlogPageContentH4>
                    Final Thoughts
                </BlogPageContentH4>
                <BlogPageContentP>
                    Investing in Bitcoin is similar to investing in stocks. To use BTC, 
                    you must first establish an account with an exchange. You create an account with a brokerage firm to trade equities. 
                    The monies are then deposited.
                    <br/> <br/>
                    The only difference between investing in BTC and trading BTC is that you must first acquire BTC with deposited cash before you can trade BTC. 
                    However, your initial BTC buy is your first open trade.
                </BlogPageContentP>
            </BlogPagesContent>
        </BlogPagesContainer>
    </React.Fragment>
  )
}
