export const GET = () => {
  return new Response(process.env.APP_HELLO, {
    status: 200,
  })
}
