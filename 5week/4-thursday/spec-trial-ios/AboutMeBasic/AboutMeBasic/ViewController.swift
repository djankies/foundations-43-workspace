//
//  ViewController.swift
//  AboutMeBasic
//
//  Created by Daniel Jankowski on 3/21/24.
//

import UIKit


class ViewController: UIViewController {

    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var ageLabel: UILabel!
    @IBOutlet weak var profileImageView: UIImageView!
    @IBOutlet weak var bioLabel: UILabel!
   
    func setUpAbtMe(){
        nameLabel.text = "Daniel"
        titleLabel.text = "Realtor, Music Producer, Electrical Engineer"
        ageLabel.text = "Age: 28"
        profileImageView.image = UIImage(named: "daniel")
        bioLabel.text = "Bio: Daniel is Real estate agent that has sold millions of dollars worth of homes during his career. He sold over $1,000,000 worth of homes in his first year in real estate. He is also a Berklee College of Music educated musician and Music Producer who has worked along-side Mike Deneen (Producer, Fountains of Wayne), Sean Slade (Producer, Radiohead), and countless independent artists from around the globe. Daniel is also a self-trained electrical engineer who has brought multiple projects into production. He is proficient in 3D modeling and design, robotics, audio circuitry, power stage design, microcontroller programming and deployment, general circuit design, PCB design and manufacture"
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setUpAbtMe()
        // Do any additional setup after loading the view.
    }
    
}

