import {expect} from 'chai';

describe('Practice and learning', () => {
	var practice = require('../src/practice.js');

	describe('Practice', () => {
			it('should be fun', () =>{
				var practicing = practice.do();

				expect(practicing).to.equal('fun');
			})
	});

	var learn = require('../src/learn.js');

	describe('Learning', () => {
			it('should be fun', () =>{
				var learning = learn.do();

				expect(learning).to.equal('fun');
			})
	});
});