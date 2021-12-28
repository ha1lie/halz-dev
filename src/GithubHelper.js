const getCommits = async (user, limit) => {
  limit = limit === undefined ? 25 : limit;
  let returnValue = [],
  request = async (path) => {
    let resp;
    await fetch(`https://api.github.com${path}`).then(async (res) => {
      resp = await res.json();
    });
    return resp;
  };
  await Promise.all(
    (
      await request(`/users/${user}/repos`)
    ).map(async (repo) => {
      Promise.all(
        (await request(`/repos/${repo.full_name}/commits`)).map(
          async (commit) => {
            let commitProto = {
              url: undefined,
              comments: undefined,
              title: undefined,
              repo: {
                  url: undefined,
                  name: undefined,
              },
              date: {
                  ms: undefined,
                  string: undefined,
              },
              author: {
                  username: undefined,
                  avatarURL: undefined,
                  url: undefined,
              },
          };

          if (commit.committer.login !== user) return;

          let date = new Date(commit.commit.committer.date);
          commitProto.url = commit.html_url;
          commitProto.comments = commit.commit.comment_count;
          commitProto.title = commit.commit.message.split(/\r?\n/)[0] ?? '';
          commitProto.repo.url = repo.html_url;
          commitProto.repo.name = repo.name;
          commitProto.date.ms = date.getTime();
          commitProto.date.string = date.toUTCString();
          commitProto.author.avatarURL = commit.committer.avatar_url;
          commitProto.author.username = commit.committer.login;
          commitProto.author.url = commit.committer.html_url;
          returnValue.push(commitProto);
        })
      );
    })
  );
  return returnValue.sort((a, b) => b.date.ms - a.date.ms).slice(0, limit);
};

export default getCommits;