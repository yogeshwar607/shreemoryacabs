import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event, {})
  } catch (e) {
    let pathname = new URL(event.request.url).pathname

    // If not found, try appending .html or /index.html
    if (!pathname.endsWith('/') && !pathname.includes('.')) {
      try {
        return await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}${pathname}/index.html`, req)
        })
      } catch (e) {}
    }

    // Fall back to 404
    return new Response('Not Found', { status: 404 })
  }
}
