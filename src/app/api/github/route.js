export async function GET() {
  try {
    const res = await fetch("https://api.github.com/users/Dhruv0126", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!res.ok) {
      return Response.json({ error: "Failed to fetch" }, { status: res.status });
    }

    const data = await res.json();
    return Response.json({
      login: data.login,
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      avatar_url: data.avatar_url,
    });
  } catch {
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
