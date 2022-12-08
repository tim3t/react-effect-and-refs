import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BASE_URL = 'https://deckofcardsapi.com/api/deck/';

const Card = () => {
	const [ card, setCard ] = useState(null);
	const [ deck, setDeck ] = useState(null);

	useEffect(() => {
		async function draw() {
			const cardRes = await (await axios.get(`${BASE_URL}/new/draw/?count=1`)).data;
			setCard(cardRes.cards[0].code);
			setDeck(cardRes.deck_id);
		}
		draw();
	}, []);

	function getCard() {
		async function getCardFromDeck() {
			const cardRes = await (await axios.get(`${BASE_URL}/{deck}/?count=1`)).data;
			setCard(cardRes.cards[0].code);
		}
		getCard();
	}

	return (
		<div>
			<p>I am {card}</p>
			<button onClick={getCard}>Draw Card!</button>
		</div>
	);
};

export default Card;
