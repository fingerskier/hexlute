// hexlute.js

/*
	arbitrarily, notes are represented thusly:
		C = 0, C# = 1, D = 2, ..., B = 11

	keys are defined similarly
		KEY 0
		key C

		...these have exactly the same effect
*/

/*
	chord notation
		major triads: I, II, III, IV, V, VI, VII
		minor triads: i, ii, iii, iv, v, vi, vii

		...of course, these only make sense with a key defined

		suffixes:
			 = major (no character, default)
			m = minor
			o = diminished
			+ = augmented
			4,6 = inversions of triads
			MM = dominant 7th
			M = major 7th
			m = minor 7th
			* = half-dimished 7th
			@ = diminished 7th
			2,3,5,7 = inversions of seventh's
*/

/*
	scale notation
*/

var note = {
	length: 0,
	pitch: 0
};

var chord = {
	notes: []
};

var key = 0;

var scale = {
	degrees: [],
	key: 0,
	root: 0,
};

module.exports = {
	int_to_interval: function(interval) {
		switch (interval) {
			case 0: 'U',
			case 1: 'm2',
			case 2: 'M2',
			case 3: 'm3',
			case 4: 'P4',
			case 5: 'tritone',
			case 6: 'P5',
			case 7: 'm6',
			case 8: 'M6',
			case 9: 'm7',
			case 10: 'M7'
		}
	},
	interval_to_int: function(interval) {
		switch (interval) {
			case 'U': 0,
			case 'm2': 1,
			case 'M2': 2,
			case 'm3': 3,
			case 'P4': 4,
			case 'tritone': 5,
			case 'P5': 6,
			case 'm6': 7,
			case 'M6': 8,
			case 'm7': 9,
			case 'M7': 10
		}
	},
	note_to_int: function(note) {
		switch (note) {
			
		}
	}
};
