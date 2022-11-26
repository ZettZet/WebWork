import { FromZero } from '../../Types'

import { _Animals, _ColorElement, _Side } from './constants'

export type Color = typeof _ColorElement[FromZero<typeof _ColorElement.length>][0]
export type MagicalElement = typeof _ColorElement[FromZero<typeof _ColorElement.length>][1]
export type Animal = typeof _Animals[FromZero<typeof _Animals.length>]
export type Side = typeof _Side[FromZero<typeof _Side.length>]
