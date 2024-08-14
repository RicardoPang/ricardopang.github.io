import{_ as e,c as t,o,a3 as r}from"./chunks/framework.BMeDXoj2.js";const _=JSON.parse('{"title":"Git 代码回滚","description":"回滚代码的正确姿势","frontmatter":{"title":"Git 代码回滚","description":"回滚代码的正确姿势"},"headers":[],"relativePath":"components/gitRollback.md","filePath":"components/gitRollback.md"}'),c={name:"components/gitRollback.md"},i=r(`<blockquote><p>并不适合阅读的个人文档。</p></blockquote><h1 id="git-revert-和-git-reset-的区别" tabindex="-1"><strong>git revert</strong> 和 <strong>git reset</strong> 的区别 <a class="header-anchor" href="#git-revert-和-git-reset-的区别" aria-label="Permalink to &quot;**git revert** 和 **git reset** 的区别&quot;">​</a></h1><p><strong>sourceTree</strong> 中 <strong>revert</strong> 译为**<code>提交回滚</code>**，作用为忽略你指定的版本，然后提交一个新的版本。新的版本中已近删除了你所指定的版本。</p><p><strong>reset</strong> 为 <strong>重置到这次提交</strong>，将内容重置到指定的版本。<code>git reset</code> 命令后面是需要加 2 种参数的：<code>–-hard</code> 和 <code>–-soft</code>。这条命令默认情况下是 <code>-–soft</code>。</p><p>执行上述命令时，这该条 commit 号之 后（时间作为参考点）的所有 commit 的修改都会退回到 git 缓冲区中。使用<code>git status</code> 命令可以在缓冲区中看到这些修改。而如果加上<code>-–hard</code>参数，则缓冲区中不会存储这些修改，git 会直接丢弃这部分内容。可以使用 <code>git push origin HEAD --force</code> 强制将分区内容推送到远程服务器。</p><h4 id="代码回退" tabindex="-1">代码回退 <a class="header-anchor" href="#代码回退" aria-label="Permalink to &quot;代码回退&quot;">​</a></h4><p>默认参数 <code>-soft</code>,所有 commit 的修改都会退回到 git 缓冲区 参数<code>--hard</code>，所有 commit 的修改直接丢弃</p><pre><code>$ git reset --hard HEAD^ 		回退到上个版本
$ git reset --hard commit_id	退到/进到 指定commit_id
</code></pre><p>推送到远程</p><pre><code>$ git push origin HEAD --force
</code></pre><h4 id="可以吃的后悔药-版本穿梭" tabindex="-1">可以吃的后悔药-&gt;版本穿梭 <a class="header-anchor" href="#可以吃的后悔药-版本穿梭" aria-label="Permalink to &quot;可以吃的后悔药-&gt;版本穿梭&quot;">​</a></h4><p>当你回滚之后，又后悔了，想恢复到新的版本怎么办？</p><p>用<code>git reflog</code>打印你记录你的每一次操作记录</p><pre><code>$ git reflog

输出：
c7edbfe HEAD@{0}: reset: moving to c7edbfefab1bdbef6cb60d2a7bb97aa80f022687
470e9c2 HEAD@{1}: reset: moving to 470e9c2
b45959e HEAD@{2}: revert: Revert &quot;add img&quot;
470e9c2 HEAD@{3}: reset: moving to 470e9c2
2c26183 HEAD@{4}: reset: moving to 2c26183
0f67bb7 HEAD@{5}: revert: Revert &quot;add img&quot;
</code></pre><p>找到你操作的 id 如：<code>b45959e</code>，就可以回退到这个版本 $ git reset --hard b45959e</p>`,15),a=[i];function d(n,s,g,p,l,m){return o(),t("div",null,a)}const b=e(c,[["render",d]]);export{_ as __pageData,b as default};
