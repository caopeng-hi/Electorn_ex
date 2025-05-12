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

- process.cwd() : 返回当前工作目录的绝对路径。
- process.env : 返回一个包含用户环境变量的对象。
- process.chdir(directory) : 改变当前工作目录。
- process.uptime() : 返回 Node.js 进程已运行的时间（以秒为单位）。
- process.memoryUsage() : 返回一个对象，包含 Node.js 进程的内存使用情况。
  - res: 常驻集大小
  - heapTotal: V8 堆内存的总量
  - heapUsed: V8 堆内存的使用量
  - external: 外部内存的使用量
- process.cpuUsage([previousValue]) : 返回一个对象，包含 Node.js 进程的 CPU 使用情况。
  - user: 用户 CPU 时间，单位为毫秒
  - system: 系统 CPU 时间，单位为毫秒

###### 输入输出相关属性

- process.stdout : 标准输出流，用于向控制台输出数据。
- process.stderr : 标准错误流，用于向控制台输出错误信息。
- process.stdin : 标准输入流，用于从控制台读取数据。

###### 控制进程相关方法

- process.exit([code])：终止当前 Node.js 进程，并返回指定的退出码。默认为 0，表示正常退出。
- process.abort()：强制终止当前 Node.js 进程，并生成一个未捕获的异常。
- process.kill(pid, [signal])：向指定的进程发送信号。默认为 'SIGTERM'，表示终止进程。
- process.nextTick(callback)：将回调函数添加到下一个事件循环的队列中，并在当前操作完成后执行。
