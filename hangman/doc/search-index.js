var searchIndex = JSON.parse('{\
"ansi_term":{"doc":"This is a library for controlling colours and formatting, …","t":[12,3,3,13,13,2,4,13,13,13,13,13,13,3,13,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12],"n":["0","ANSIString","ANSIStrings","Black","Blue","Color","Colour","Cyan","Fixed","Green","Purple","RGB","Red","Style","White","Yellow","blink","blink","bold","bold","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","default","deref","dimmed","dimmed","eq","eq","eq","fg","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","hidden","hidden","into","into","into","into","italic","italic","new","normal","on","on","paint","paint","reverse","reverse","strikethrough","strikethrough","to_owned","to_owned","to_owned","to_string","to_string","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","underline","underline","0","0","1","2"],"q":["ansi_term","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","ansi_term::Colour","","",""],"d":["","An ANSI String is a string coupled with the Style to …","A set of <code>ANSIString</code>s collected together, in order to be …","Colour #0 (foreground code <code>30</code>, background code <code>40</code>).","Colour #4 (foreground code <code>34</code>, background code <code>44</code>).","Color is a type alias for Colour for those who can’t be …","A colour is one specific type of ANSI escape code, and can …","Colour #6 (foreground code <code>36</code>, background code <code>46</code>).","A colour number from 0 to 255, for use in 256-colour …","Colour #2 (foreground code <code>32</code>, background code <code>42</code>).","Colour #5 (foreground code <code>35</code>, background code <code>45</code>).","A 24-bit RGB color, as specified by ISO-8613-3.","Colour #1 (foreground code <code>31</code>, background code <code>41</code>).","A style is a collection of properties that can format a …","Colour #7 (foreground code <code>37</code>, background code <code>47</code>).","Colour #3 (foreground code <code>33</code>, background code <code>43</code>).","Returns a Style with the blink property set.","Returns a Style with the blink property set.","Returns a Style with the bold property set.","Returns a Style with the bold property set.","","","","","","","","","","","","","","","","","Returns a Style with the dimmed property set.","Returns a Style with the dimmed property set.","","","","Returns a Style with the foreground colour property set.","","","","","","Returns the argument unchanged.","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns a Style with the hidden property set.","Returns a Style with the hidden property set.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Returns a Style with the italic property set.","Returns a Style with the italic property set.","Creates a new Style with no differences.","Return a Style with the foreground colour set to this …","Returns a Style with the background colour property set.","Returns a Style with the background colour property set.","Paints the given text with this colour, returning an ANSI …","Paints the given text with this colour, returning an ANSI …","Returns a Style with the reverse property set.","Returns a Style with the reverse property set.","Returns a Style with the strikethrough property set.","Returns a Style with the hidden property set.","","","","","","","","","","","","","","","","","","Returns a Style with the underline property set.","Returns a Style with the underline property set.","","","",""],"i":[6,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,2,1,2,6,3,1,2,6,3,1,2,3,1,2,3,1,2,2,3,1,2,3,1,2,2,6,3,3,1,2,6,3,3,1,2,1,2,6,3,1,2,1,2,2,1,1,2,1,2,1,2,1,2,3,1,2,6,3,6,3,1,2,6,3,1,2,6,3,1,2,1,2,12,13,13,13],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[1,2],[2,2],[1,2],[2,2],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[3,3],[1,1],[2,2],[[]],[[]],[[]],[[],2],[3,4],[1,2],[2,2],[[3,3],5],[[1,1],5],[[2,2],5],[[2,1],2],[[6,7],8],[[3,7],8],[[3,7],8],[[1,7],8],[[2,7],8],[[]],[[],3],[[]],[[]],[[]],[1,2],[2,2],[[]],[[]],[[]],[[]],[1,2],[2,2],[[],2],[1,2],[[1,1],2],[[2,1],2],[1,3],[2,3],[1,2],[2,2],[1,2],[2,2],[[]],[[]],[[]],[[],9],[[],9],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],10],[[],11],[[],11],[[],11],[[],11],[1,2],[2,2],0,0,0,0],"p":[[4,"Colour"],[3,"Style"],[3,"ANSIString"],[15,"str"],[15,"bool"],[3,"ANSIStrings"],[3,"Formatter"],[6,"Result"],[3,"String"],[4,"Result"],[3,"TypeId"],[13,"Fixed"],[13,"RGB"]]},\
"hangman":{"doc":"","t":[13,3,13,13,4,11,11,11,11,5,5,12,5,11,11,5,11,11,12,5,5,5,12,12,11,11,11,11,11,11,5,5],"n":["AlreadyDiscovered","GameData","LetterGuessed","LetterMissed","UserInputStatus","borrow","borrow","borrow_mut","borrow_mut","check_user_guess","clear","discovered_letters","format_masked_string","from","from","get_random_line","into","into","lives","main","print_hangman","read_guess","secret_line","status","try_from","try_from","try_into","try_into","type_id","type_id","update_screen","validate_user_guess"],"q":["hangman","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","This is the Struct for the game The discovered letters …","","","This enum is used to tell a user if they have previously …","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","I made changes to the hang man images below and added more …","","","","","","","","","","",""],"i":[3,0,3,3,0,1,3,1,3,0,0,1,0,1,3,0,1,3,1,0,0,0,1,1,1,3,1,3,1,3,0,0],"f":[0,0,0,0,0,[[]],[[]],[[]],[[]],[[1,2],3],[[]],0,[[4,4],4],[[]],[[]],[[],[[6,[4,5]]]],[[]],[[]],0,[[]],[1],[[],[[7,[2]]]],0,0,[[],6],[[],6],[[],6],[[],6],[[],8],[[],8],[[1,4]],[[[7,[2]]],9]],"p":[[3,"GameData"],[15,"char"],[4,"UserInputStatus"],[3,"String"],[3,"Error"],[4,"Result"],[4,"Option"],[3,"TypeId"],[15,"bool"]]}\
}');
if (typeof window !== 'undefined' && window.initSearch) {window.initSearch(searchIndex)};
if (typeof exports !== 'undefined') {exports.searchIndex = searchIndex};