import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things:
 * 1. we will skip caching on the edge, which makes it easier to debug
 * 2. we will return an error message on exception in your Response rather than the default 500 internal server error
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  try {
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the index.html
    if (!DEBUG) {
      // return 404 for all other cases
      return new Response('Not Found', { status: 404 })
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
} 