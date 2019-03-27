//
//  BackgroundView.m
//  RocketTest
//
//  Created by Alex Korzh on 3/27/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BackgroundView.h"

@implementation BackgroundView

+ (BackgroundView *) storyboardInstance {
  NSString *storyboardName = NSStringFromClass([self class]);
  UIStoryboard *storyboard = [UIStoryboard storyboardWithName:storyboardName bundle:nil];
  BackgroundView *view = (BackgroundView *)[storyboard instantiateInitialViewController];
  return view;
}

- (void)viewDidLoad {
  [super viewDidLoad];
  [self applyMotionEffectTo:_backgroundImageView magnitude:20];
  [self applyMotionEffectTo:_appIconsImageView magnitude:-25];
}

- (void)applyMotionEffectTo:(UIView *)view magnitude:(CGFloat)magnitude {
  UIInterpolatingMotionEffect *xMotion = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.x" type:UIInterpolatingMotionEffectTypeTiltAlongHorizontalAxis];
  xMotion.minimumRelativeValue = [NSNumber numberWithFloat: -magnitude];
  xMotion.maximumRelativeValue = [NSNumber numberWithFloat: magnitude];
  
  UIInterpolatingMotionEffect *yMotion = [[UIInterpolatingMotionEffect alloc] initWithKeyPath:@"center.y" type:UIInterpolatingMotionEffectTypeTiltAlongVerticalAxis];
  yMotion.minimumRelativeValue = [NSNumber numberWithFloat: -magnitude];
  yMotion.maximumRelativeValue = [NSNumber numberWithFloat: magnitude];
  
  UIMotionEffectGroup *group = [[UIMotionEffectGroup alloc] init];
  group.motionEffects = [NSArray arrayWithObjects:xMotion, yMotion, nil];
  
  [view addMotionEffect:group];
}

@end
