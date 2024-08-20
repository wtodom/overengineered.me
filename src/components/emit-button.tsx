export default function CharacterImport() {
    async function handleEmit(formData: FormData) {
        'use server';

        console.log(JSON.stringify('emitted this'))
    }

    return (
        <form action={handleEmit}>
            <button className="btn btn-active btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Emit
            </button>
        </form>
    )
}
