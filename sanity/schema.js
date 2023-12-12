import { blockContent } from './schemas/blockContent'
import { category } from './schemas/category'
import { post } from './schemas/post'
import { author } from './schemas/author'
import { gear } from './schemas/gear'

export const schema = {
    types: [post, author, category, blockContent, gear],
}
