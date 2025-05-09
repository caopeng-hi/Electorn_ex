#### process

process 是 Node.js 中的一个全局对象，提供了与当前 Node.js 进程相关的信息和控制功能。它不需要通过 require() 引入，可以直接使用。

##### 主要功能

1.  获取进程信息

2.  控制进程的执行和退出

3.  处理进程的输入输出

4.  管理环境变量

5.  处理信号和事件

##### 常用属性和方法

###### 进程信息相关属性

- process.argv：返回一个数组，包含启动 Node.js 进程时传入的命令行参数。

  ```bash
      node process.js arg1 arg2 arg3
  ```

  - process.argv[0] ：Node.js 可执行文件的路径。node.exe 文件在电脑的位置
  - process.argv[1]：启动 Node.js 进程时传入的脚本文件路径。 需要执行的 process.js 文件路径
  - process.argv[2]：启动 Node.js 进程时传入的第一个命令行参数。 arg1 arg2 arg3

- process.process.execPath()：返回启动 Node.js 进程的可执行文件的绝对路径。

- process.execArgv()：返回一个数组，包含启动 Node.js 进程时传入的命令行参数，但不包括脚本文件路径和第一个命令行参数。

- process.pid()：返回当前进程的进程 ID。

- process.ppid()：返回当前进程的父进程的进程 ID。

- process.platform()：返回当前 Node.js 进程运行的平台名称。如 'darwin', 'win32', 'linux'

- process.version()：返回当前 Node.js 版本号。

- process.arch()：返回当前 Node.js 进程的架构。如 'x64', 'arm'

###### 运行时相关属性
