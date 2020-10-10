#!/bin/sh

mkdir readme_files && cd readme_files && wget -r -np -nv -nd -A 'README*' -e robots=off 'http://192.168.X.X/.hidden' && cd '..' && node 'script.js'

# Documentation:
# We download all the README files from /.hidden and execute a script to
# log the files without the repetitive strings identified before.
#
# -r: Turn on recursive retrieving. The default maximum depth is 5.
# -np: Do not ever ascend to the parent directory when retrieving recursively.
# -nv: Disable verbose.
# -nd: Do not create a hierarchy of directories when retrieving recursively.
# -e: Execute command.
# -A: Accept files.
