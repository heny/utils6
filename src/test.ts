import simple from 'simple-git';

(async () => {
  const git = simple();
  const status = await git.status();
  console.log(status);
})();
