import{_ as n,c as t,o as e,a3 as i}from"./chunks/framework.BMeDXoj2.js";const p=JSON.parse('{"title":"Git指令整理","description":"","frontmatter":{"layout":"post","title":"Git指令整理","subtitle":"常用的 Git 指令","date":"2024-07-03T00:00:00.000Z","author":"BY","header-img":"img/post-bg-ios9-web.jpg","catalog":true,"tags":["Mac","终端","Git"]},"headers":[],"relativePath":"components/git.md","filePath":"components/git.md"}'),a={name:"components/git.md"},o=i(`<blockquote><p>随便整理的一些自用的 Git 指令</p></blockquote><h1 id="github-创建仓库提示代码" tabindex="-1">GitHub 创建仓库提示代码 <a class="header-anchor" href="#github-创建仓库提示代码" aria-label="Permalink to &quot;GitHub 创建仓库提示代码&quot;">​</a></h1><pre><code>echo &quot;# 项目名&quot; &gt;&gt; README.md
git init
git add README.md
git commit -m &quot;first commit&quot;
git remote add origin git@github.com:xxx
git push -u origin master
</code></pre><p>若仓库存在直接 push</p><pre><code>git remote add origin git@github.com:xxx
git push -u origin master
</code></pre><h1 id="常用操作" tabindex="-1">常用操作 <a class="header-anchor" href="#常用操作" aria-label="Permalink to &quot;常用操作&quot;">​</a></h1><h4 id="创建仓库-初始化" tabindex="-1">创建仓库（初始化） <a class="header-anchor" href="#创建仓库-初始化" aria-label="Permalink to &quot;创建仓库（初始化）&quot;">​</a></h4><pre><code>在当前指定目录下创建
git init

新建一个仓库目录
git init [project-name]

克隆一个远程项目
git clone [url]
</code></pre><h4 id="添加文件到缓存区" tabindex="-1">添加文件到缓存区 <a class="header-anchor" href="#添加文件到缓存区" aria-label="Permalink to &quot;添加文件到缓存区&quot;">​</a></h4><pre><code>添加所有变化的文件
</code></pre><p>git add .</p><pre><code>添加名称指定文件
git add text.txt
</code></pre><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h4><pre><code>设置提交代码时的用户信息
git config [--global] user.name &quot;[name]&quot;
git config [--global] user.email &quot;[email address]&quot;
</code></pre><h4 id="提交" tabindex="-1">提交 <a class="header-anchor" href="#提交" aria-label="Permalink to &quot;提交&quot;">​</a></h4><pre><code>提交暂存区到仓库区
git commit -m &quot;msg&quot;

# 提交暂存区的指定文件到仓库区
$ git commit [file1] [file2] ... -m [message]

# 提交工作区自上次commit之后的变化，直接到仓库区
$ git commit -a

# 提交时显示所有diff信息
$ git commit -v

# 使用一次新的commit，替代上一次提交
# 如果代码没有任何新变化，则用来改写上一次commit的提交信息
$ git commit --amend -m [message]

# 重做上一次commit，并包括指定文件的新变化
$ git commit --amend [file1] [file2] ...
</code></pre><h4 id="远程同步" tabindex="-1">远程同步 <a class="header-anchor" href="#远程同步" aria-label="Permalink to &quot;远程同步&quot;">​</a></h4><pre><code># 下载远程仓库的所有变动
$ git fetch [remote]

# 显示所有远程仓库
$ git remote -v

# 显示某个远程仓库的信息
$ git remote show [remote]

# 增加一个新的远程仓库，并命名
$ git remote add [shortname] [url]

# 取回远程仓库的变化，并与本地分支合并
$ git pull [remote] [branch]

# 上传本地指定分支到远程仓库
$ git push [remote] [branch]

# 强行推送当前分支到远程仓库，即使有冲突
$ git push [remote] --force

# 推送所有分支到远程仓库
$ git push [remote] --all
</code></pre><h4 id="分支" tabindex="-1">分支 <a class="header-anchor" href="#分支" aria-label="Permalink to &quot;分支&quot;">​</a></h4><pre><code># 列出所有本地分支
$ git branch

# 列出所有远程分支
$ git branch -r

# 列出所有本地分支和远程分支
$ git branch -a

# 新建一个分支，但依然停留在当前分支
$ git branch [branch-name]

# 新建一个分支，并切换到该分支
$ git checkout -b [branch]

# 新建一个分支，指向指定commit
$ git branch [branch] [commit]

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track [branch] [remote-branch]

# 切换到指定分支，并更新工作区
$ git checkout [branch-name]

# 切换到上一个分支
$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间
$ git branch --set-upstream [branch] [remote-branch]

# 合并指定分支到当前分支
$ git merge [branch]

# 选择一个commit，合并进当前分支
$ git cherry-pick [commit]

# 删除分支
$ git branch -d [branch-name]

# 删除远程分支
$ git push origin --delete [branch-name]
$ git branch -dr [remote/branch]
</code></pre><h4 id="标签-tags" tabindex="-1">标签 Tags <a class="header-anchor" href="#标签-tags" aria-label="Permalink to &quot;标签 Tags&quot;">​</a></h4><pre><code>添加标签 在当前commit
git tag -a v1.0 -m &#39;xxx&#39;

添加标签 在指定commit
git tag v1.0 [commit]

查看
git tag

删除
git tag -d V1.0

删除远程tag
git push origin :refs/tags/[tagName]

推送
git push origin --tags

拉取
git fetch origin tag V1.0

新建一个分支，指向某个tag
git checkout -b [branch] [tag]
</code></pre><h4 id="查看信息" tabindex="-1">查看信息 <a class="header-anchor" href="#查看信息" aria-label="Permalink to &quot;查看信息&quot;">​</a></h4><pre><code># 显示有变更的文件
$ git status

# 显示当前分支的版本历史
$ git log

# 显示commit历史，以及每次commit发生变更的文件
$ git log --stat

# 搜索提交历史，根据关键词
$ git log -S [keyword]

# 显示某个commit之后的所有变动，每个commit占据一行
$ git log [tag] HEAD --pretty=format:%s

# 显示某个commit之后的所有变动，其&quot;提交说明&quot;必须符合搜索条件
$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名
$ git log --follow [file]
$ git whatchanged [file]

# 显示指定文件相关的每一次diff
$ git log -p [file]

# 显示过去5次提交
$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序
$ git shortlog -sn

# 显示指定文件是什么人在什么时间修改过
$ git blame [file]

# 显示暂存区和工作区的差异
$ git diff

# 显示暂存区和上一个commit的差异
$ git diff --cached [file]

# 显示工作区与当前分支最新commit之间的差异
$ git diff HEAD

# 显示两次提交之间的差异
$ git diff [first-branch]...[second-branch]

# 显示今天你写了多少行代码
$ git diff --shortstat &quot;@{0 day ago}&quot;

# 显示某次提交的元数据和内容变化
$ git show [commit]

# 显示某次提交发生变化的文件
$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容
$ git show [commit]:[filename]

# 显示当前分支的最近几次提交
$ git reflog
</code></pre><h4 id="撤销" tabindex="-1">撤销 <a class="header-anchor" href="#撤销" aria-label="Permalink to &quot;撤销&quot;">​</a></h4><pre><code># 恢复暂存区的指定文件到工作区
$ git checkout [file]

# 恢复某个commit的指定文件到暂存区和工作区
$ git checkout [commit] [file]

# 恢复暂存区的所有文件到工作区
$ git checkout .

# 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
$ git reset [file]

# 重置暂存区与工作区，与上一次commit保持一致
$ git reset --hard

# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
$ git reset [commit]

# 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
$ git reset --hard [commit]

# 重置当前HEAD为指定commit，但保持暂存区和工作区不变
$ git reset --keep [commit]

# 新建一个commit，用来撤销指定commit
# 后者的所有变化都将被前者抵消，并且应用到当前分支
$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入
$ git stash
$ git stash pop
</code></pre><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><pre><code># 生成一个可供发布的压缩包
$ git archives
</code></pre>`,28),r=[o];function c(m,g,h,d,s,l){return e(),t("div",null,r)}const b=n(a,[["render",c]]);export{p as __pageData,b as default};
