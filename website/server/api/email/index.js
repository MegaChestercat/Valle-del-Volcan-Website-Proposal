
export default defineEventHandler(async (event) =>{
    const config = useRuntimeConfig()
    const body = await readBody(event)
    console.log('Received form data:', body); // Inspect the object

    const client = new SMTPClient({
       
    });

    return { message: 'Author created' };
})