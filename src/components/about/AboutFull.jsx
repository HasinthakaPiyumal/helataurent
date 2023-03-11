import React from 'react'
import './aboutfull.css'
import AboutImage from '../../assests/gallery-5.jpg'
import AboutImage2 from '../../assests/gallery-6.jpg'
const AboutFull = () => {
    return (
        <div className="about-full">
            <div className="heads">
                <div className="head__image">
                    <img src={AboutImage} alt=""/>
                </div>
                <div className="head">restaurant</div>
                <div className="content">
                    
                    <p>
                    <h2>About Our Restaurent</h2>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar maximus nisi, eu molestie velit tincidunt feugiat.<br/><br/> Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce aliquam in velit eget mollis. Sed vestibulum, lacus nec viverra luctus, tortor purus sollicitudin nisi, sit amet blandit lectus enim non lorem. Duis nec arcu id ipsum tempus blandit. Sed lobortis accumsan nisl, feugiat convallis dui accumsan ut. Vivamus ac convallis neque, eu egestas libero. Pellentesque eget est tincidunt, viverra est sed, auctor lorem. Proin vehicula interdum risus, in pellentesque lorem mollis vel.<br/><br/> Integer eget euismod libero. Proin varius erat id nunc scelerisque, eu gravida ex tristique. Integer volutpat suscipit velit, a sagittis nulla maximus ut. Sed consequat augue quis diam euismod, ac scelerisque mauris scelerisque. Maecenas ultricies mattis augue, nec maximus ante porttitor ut. Suspendisse id lorem vulputate, aliquam risus nec, sagittis dolor.
                        Donec vulputate, odio eu elementum gravida, ipsum ipsum malesuada nibh, in laoreet felis nisl venenatis purus.<br/><br/> Proin convallis efficitur metus, id tincidunt est faucibus in. Sed luctus posuere nibh sed mattis. Cras accumsan fringilla est quis lacinia. Proin eleifend est arcu, non tempus nisi euismod non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed aliquet, libero faucibus blandit vehicula, nisi sapien porta tortor, quis eleifend mi metus ac orci. Quisque mattis mauris in ipsum maximus, quis iaculis augue tincidunt. Quisque id leo ullamcorper, rutrum mi eget, laoreet massa.
                       Praesent vitae orci dignissim, iaculis elit eu, egestas libero.<br/><br/> Nullam in mauris turpis. Morbi ut eros augue. Fusce consectetur augue massa, eget commodo neque fermentum sed. Vestibulum fermentum felis a velit hendrerit scelerisque eu quis lectus. Vestibulum dapibus ligula quis diam maximus varius non et massa. Proin scelerisque pulvinar leo ac volutpat.
                    </p>
                    <img src={AboutImage2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutFull
