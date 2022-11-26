/* eslint-disable no-mixed-spaces-and-tabs */

export type OneQuestion =
	| {
			question: string
			possibleAnswers: string[]
	  } & (
			| {
					correctAnswers: string
					multipleAnswer?: false
			  }
			| { correctAnswers: string[]; multipleAnswer: true }
	  )
