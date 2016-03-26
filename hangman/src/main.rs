extern crate rand;
extern crate ansi_term;

use std::process::Command;

use std::io;
use std::io::BufReader;
use std::io::BufRead;
use std::fs::File;
use rand::Rng;

use ansi_term::Colour::Red;
use ansi_term::Colour::Green;
use ansi_term::Colour::Yellow;

struct GameData {
    secret_line         : String,
    discovered_letters  : String,
    lives               : i32,
    status              : String
}

fn main()
{
    let random_line = get_random_line().expect("Failed to read input data!");
    // TODO: nicer way to display is needed
    let mut gd : GameData = GameData {
                        secret_line        : random_line,
                        discovered_letters : String::new(),
                        lives              : 5,
                        status             : String::new()
                        };

    loop
    {
        clear();
        println!("-------------------------------HANGMAN 0.1 ------------------------");
        print_hangman(&gd);

        let secret_line_masked = format_masked_string(&gd.secret_line, &gd.discovered_letters);
        println!("{}", secret_line_masked);

        if !secret_line_masked.contains('_')
        {
            println!("{}", Green.bold().paint("-------------------------------You won!------------------------"));
            break;
        }
        else if gd.lives == 0
        {
            println!("{}",Red.bold().paint("-------------------------------You lost!------------------------"));
            break;
        }
        else
        {
            println!("{}", gd.status);
        }

        println!("-------------------------------Type your guess ------------------------");
        let user_guess = read_guess();
        process_user_guess(&mut gd, user_guess);
    }
}
// TODO: tolower
fn read_guess() -> Option<char>
{
    let mut guess = String::new();
    io::stdin().read_line(&mut guess).expect("Failed to read line");
    guess.trim().chars().nth(0)
}

fn get_random_line() -> Result<String, io::Error>
{
    let f = try!(File::open("input.txt"));
    let file = BufReader::new(&f);
    let mut v: Vec<String> = Vec::new();

    for line in file.lines()
    {
        let l = line.unwrap().to_lowercase();
        v.push(l);
    }

    let random_line = rand::thread_rng().gen_range(1, v.len());
    let secret_line = v[random_line].clone();
    Ok(secret_line)
}

// TODO: there is no point in doing it everytime
// TODO: discovered string should be stored and 1 letter changed everytime
fn format_masked_string(input: &String, mask: &String) -> String
{
    let mut result : String = String::new();

    for (u, c) in input.chars().enumerate()
    {
        result.push(if c == ' ' {c}
            else if mask.contains(c) {c}
            else {'_'});
        result.push(' ');
    }

    result
}

fn process_user_guess(gd: &mut GameData, user_guess: Option<char>)
{
    match user_guess
    {
        Some(guess) =>
        {
            if !guess.is_alphabetic()
            {
                gd.status = format!("-------------------------------{} is not a letter!-------------------------------", guess);
            }
            else if gd.discovered_letters.contains(guess)
            {
                gd.status = format!("-------------------------------{} is already discovered!-------------------------------", guess);
            }
            else
            {
                gd.discovered_letters.push(guess);

                if !gd.secret_line.contains(guess)
                {
                    gd.lives = gd.lives - 1;
                    gd.status = format!("-------------------------------Unfortunately, no {}------------------------", guess);
                }
                else
                {
                    gd.status = format!("-------------------------------You discovered {}------------------------", guess);
                }
            }
        }

        None => {}
    }
}

fn print_hangman(gd: &GameData)
{
    println!("Lives: {}. Discovered letters: {}", gd.lives, gd.discovered_letters);

    match gd.lives
    {
        0 =>
        {
            println!(" _________   ");
            println!("|         |  ");
            println!("|         XO ");
            println!("|        /|\\ ");
            println!("|        / \\ ");
            println!("|            ");
            println!("|            ");
        }

        1 =>
        {
            println!(" _________   ");
            println!("|         |  ");
            println!("|         O  ");
            println!("|        /|\\ ");
            println!("|        / \\ ");
            println!("|        ||| ");
            println!("|        ||| ");
        }

        2 =>
        {
            println!(" _________   ");
            println!("|            ");
            println!("|         O  ");
            println!("|        /|\\ ");
            println!("|        / \\ ");
            println!("|        ||| ");
            println!("|        ||| ");
        }

        3 =>
        {
            println!(" _________   ");
            println!("|            ");
            println!("|            ");
            println!("|         O  ");
            println!("|        /|\\ ");
            println!("|        / \\ ");
            println!("|        ||| ");

        }

        4 =>
        {
            println!(" _________   ");
            println!("|            ");
            println!("|            ");
            println!("|            ");
            println!("|         O  ");
            println!("|        /|\\ ");
            println!("|        / \\ ");
        }

        _ =>
        {
            println!("             ");
            println!("             ");
            println!("             ");
            println!("             ");
            println!("          O  ");
            println!("         /|\\ ");
            println!("         / \\ ");
        }
    }
}

fn clear()
{
  let output = Command::new("clear").output().unwrap_or_else(|e|{
    panic!("failed to execute process: {}", e)
  });
  println!("{}", String::from_utf8_lossy(&output.stdout));
}

