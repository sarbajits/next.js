export default async function Profile() {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold">Profile Loaded 🎉</h1>
        </div>
    );
}
