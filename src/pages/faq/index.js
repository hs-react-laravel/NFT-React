import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DefaultPage from '../../components/DefaultPage/DefaultPage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'

import './faq.css'

export default function Faq(props) {
  const [qShow1, setQShow1] = useState(false);
  const [qShow2, setQShow2] = useState(false);
  const [qShow3, setQShow3] = useState(false);
  const [qShow4, setQShow4] = useState(false);
  const [qShow5, setQShow5] = useState(false);
  return (
    <DefaultPage>
      <div className="page-home">
        <p className="text-magento-border" style={{ marginTop: '2vh' }}>FAQ</p>
        <div className="faq-text-group">
          <div className="faq-text-question" onClick={() => setQShow1(prev => !prev)}>
            <FontAwesomeIcon icon={qShow1 ? faMinusSquare : faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">How do I download MetaMask and fund my MetaMask wallet?</p>
          </div>
          {qShow1 && (
            <p className="faq-text-answer">
              1. You need to <a href='https://metamask.io/download' target='_blank'>download MetaMask.</a> <br />
              2. <a href='https://www.coinbase.com/buy-ethereum' target='_blank'>Buy Ethereum</a> from an exchange. <br />
              3. <a href='https://www.coinbase.com/learn/tips-and-tutorials/how-to-send-crypto' target='_blank'>Transfer</a> it to your MetaMask Wallet. <br />
            </p>
          )}
          <div className="faq-text-question" onClick={() => setQShow2(prev => !prev)}>
            <FontAwesomeIcon icon={qShow2 ? faMinusSquare : faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">How do I mint an NFT?</p>
          </div>
          {qShow2 && (
            <p className="faq-text-answer">
              Once you have MetaMask installed and Ethereum in your wallet you can <Link to='/mint'>click here</Link> to mint an NFT.
            </p>
          )}
          <div className="faq-text-question" onClick={() => setQShow3(prev => !prev)}>
            <FontAwesomeIcon icon={qShow3 ? faMinusSquare : faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">When can I mint an NFT?</p>
          </div>
          {qShow3 && (
            <p className="faq-text-answer">
              You can officially mint an NFT on January 8th at 1:00 pm ET.
            </p>
          )}
          <div className="faq-text-question" onClick={() => setQShow4(prev => !prev)}>
            <FontAwesomeIcon icon={qShow4 ? faMinusSquare : faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">What do you have planned for the future of CryptoHermits?</p>
          </div>
          {qShow4 && (
            <p className="faq-text-answer">
              We have a lot planned once we reach 100% in sales for the bookworm collection. 
              The next collection we are excited for is the homesteader collection. 
              From there we hope to expand to other collections. 
              We want to create a community of self-sufficient, independent thinkers who aren't afraid to fight censorship!
            </p>
          )}
          <div className="faq-text-question" onClick={() => setQShow5(prev => !prev)}>
            <FontAwesomeIcon icon={qShow5 ? faMinusSquare : faPlusSquare} className="faq-text-plus" />
            <p className="text-faq-black">Can I buy on my mobile phone?</p>
          </div>
          {qShow5 && (
            <p className="faq-text-answer">
              Yes, simply download MetaMask for iOS or Android and visit our site using the MetaMask browser.
            </p>
          )}
        </div>
      </div>
    </DefaultPage>
  )
}